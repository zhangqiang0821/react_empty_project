import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Home extends Component {
	render() {
		return (
      <div className="box">
        我是默认项目
      </div>
		)
	}
}

export default connect()(Home)