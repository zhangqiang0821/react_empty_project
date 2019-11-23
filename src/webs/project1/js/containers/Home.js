import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Test from '../../../../js/components/test'

class Home extends Component {
	render() {
		return (
      <div className="box">
        我是project1-----111111
				<Test/>
      </div>
		)
	}
}

export default connect()(Home)