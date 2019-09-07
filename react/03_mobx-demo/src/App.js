import React from 'react';
import './App.css';
import AppRouter from './routers/index'
import { Layout, Menu, Breadcrumb, Icon} from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
function App() {

  return (
    <div>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">后台管理</Menu.Item>
            <Menu.Item key="2">时代计划</Menu.Item>
            <Menu.Item key="3">党团组织</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      公司管理
                </span>
                  }
                >
                  <Menu.Item key="1">公司历史</Menu.Item>
                  <Menu.Item key="2">公司章程</Menu.Item>
                  <Menu.Item key="3">公司业务</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="laptop" />
                      日常管理
                </span>
                  }
                >
                  <Menu.Item key="5">公司活动</Menu.Item>
                  <Menu.Item key="6">节假日安排</Menu.Item>
                  <Menu.Item key="7">值班安排</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="notification" />
                      用户管理
                </span>
                  }
                >
                  <Menu.Item key="9">客户信息管理</Menu.Item>
                  <Menu.Item key="10">员工管理</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content >
              <AppRouter />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}

export default App;
