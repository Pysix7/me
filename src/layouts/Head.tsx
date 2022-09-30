import React, { PureComponent, Fragment } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import menuConfig from '~/configs/menuConfig';
import MobileHead from "~/components/MobileHead";
import DefaultHead from "~/components/DefaultHead";

import './index.less';

interface IProps {
  isMobile: boolean;
}
interface IState {
  drawerVisible: boolean;
}

class Head extends PureComponent<IProps, IState> {
  state = {
    drawerVisible: false
  }
  componentDidMount() {
    const { isMobile } = this.props;
    if (isMobile) {
      this.setState({
        drawerVisible: true
      })
    }
  }

  drawerToggle = () => {
    this.setState((prevState: IState) => {
      return {
        drawerVisible: !prevState.drawerVisible
      }
    })
  }

  render() {
    const { isMobile } = this.props;
    const { drawerVisible } = this.state;

    return (
      <div className="headCard" >
        {isMobile ? (
          <Fragment>
            <span onClick={this.drawerToggle} className="drawerHandle">
              <MenuOutlined />
            </span>
            <MobileHead
              menuData={menuConfig}
              drawerToggle={this.drawerToggle}
              drawerVisible={drawerVisible}
            />
          </Fragment>)
          : <DefaultHead  />
        }
      </div>
    )
  }
}

export default Head;