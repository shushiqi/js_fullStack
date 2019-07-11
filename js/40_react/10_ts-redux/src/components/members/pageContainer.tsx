import * as React from 'react'
import { connect } from 'react-redux'
import { MembersPage } from './page'
import { fetchMembersAction } from './actions/fetchMenbers';
import { members } from '../../api/member/mockData';

const mapStateToProps = (state) => ({
  members: state.memebrs
})
const mapActionsToProps = (dispatch) => ({
  fetchMembers: () => dispatch(fetchMembersAction(members))
})

export const MembersPageContainer = connect(mapStateToProps)(MembersPage)