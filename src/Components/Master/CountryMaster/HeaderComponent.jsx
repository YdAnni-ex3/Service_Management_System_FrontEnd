import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import styled from 'styled-components';
import SubMenu from './Submenu';
import { IconContext } from 'react-icons/lib';
const Nav = styled.div`
  background: none;
  height: 45px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
color:#15171c ;
background: none;
  margin-left: 2rem;
  font-size: 2rem;
  height: 45px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #EEEEEE;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  overflow-y: scroll;
  z-index: 10;
`;

const func = styled.div`
text-align: justify;
text-color: #FFFFFF;
`
const SidebarWrap = styled.div`
  width: 100%;
`;
export default class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
          sidebar : false,
          setSidebar : '',
          SidebarData : [
              {
                title:'Home',
                path:'/',
                icon:<AiIcons.AiFillHome/>,
                cName:'nav-text',
                iconClosed: <RiIcons.RiArrowDownSFill/>,
                iconOpened:<RiIcons.RiArrowUpSFill/>
              },
              {
                title:'CountryMaster',
                path:'/',
                cName:'nav-text',
                iconClosed: <RiIcons.RiArrowDownSFill/>,
                iconOpened:<RiIcons.RiArrowUpSFill/>,
                subbNav:[
                    {
                        title:'AddCountryDetails',
                        path:'/addCountryDetails',
                        cName:'nav-text'
                    },
                    {
                        title:'ShowCountryDetails',
                        path:'/showCountryDetails',
                        cName:'nav-text'
                    }
                ]
              },

              {
                title:'StateMaster',
                path:'/',
                cName:'nav-text',
                iconClosed: <RiIcons.RiArrowDownSFill/>,
                iconOpened:<RiIcons.RiArrowUpSFill/>,
                subbNav:[
                    {
                        title:'AddStateDetails',
                        path:'/addCountryDetails',
                        cName:'nav-text'
                    },
                    {
                        title:'ShowStateDetails',
                        path:'/showCountryDetails',
                        cName:'nav-text'
                    }
                ]
              },

              {
                title:'DistrictMaster',
                path:'/',
                cName:'nav-text',
                iconClosed: <RiIcons.RiArrowDownSFill/>,
                iconOpened:<RiIcons.RiArrowUpSFill/>,
                subbNav:[
                    {
                        title:'AddDistrictDetails',
                        path:'/addCountryDetails',
                        cName:'nav-text'
                    },
                    {
                        title:'ShowDistrictDetails',
                        path:'/showCountryDetails',
                        cName:'nav-text'
                    }
                ]
              },
              {
                title:'PinMaster',
                path:'/',
                cName:'nav-text',
                iconClosed: <RiIcons.RiArrowDownSFill/>,
                iconOpened:<RiIcons.RiArrowUpSFill/>,
                subbNav:[
                    {
                        title:'AddPinDetails',
                        path:'/addCountryDetails',
                        cName:'nav-text'
                    },
                    {
                        title:'ShowPinDetails',
                        path:'/showCountryDetails',
                        cName:'nav-text'
                    }
                ]
              }
          ]
        };
        this.showSidebar = this.showSidebar.bind(this)
    }

    showSidebar = (event) =>{
        this.setState({sidebar:!this.state.sidebar})
    }
    render() {
        return (
            <div>
              <header>
                <nav className = "navbar navbar-expand-md dark">  
                  <div>
                    <IconContext.Provider value={{ color: '#15171c' }}>
                      <Nav>
                        <NavIcon to='#'> 
                          <FaIcons.FaBars onClick={this.showSidebar} /> 
                        </NavIcon>
                      </Nav>
                      <SidebarNav sidebar={this.state.sidebar}>
                      <SidebarWrap>
                        <NavIcon to='#'>
                          <AiIcons.AiOutlineClose onClick={this.showSidebar} />
                        </NavIcon>
                        {this.state.SidebarData.map((item, index) => {
                          return <SubMenu item={item} key={index} />;
                        })}
                      </SidebarWrap>
                    </SidebarNav>
                  </IconContext.Provider>
                  </div>
                    <div className  = "text-center"> 
                    <h2 className = "text-center">Service Management</h2>  
                  </div>
                </nav> 
              </header>
            </div>
        )
    }
}
