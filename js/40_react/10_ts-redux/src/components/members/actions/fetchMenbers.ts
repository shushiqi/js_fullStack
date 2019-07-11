import { memberAPI } from '../../../api/member'
import { MemberEntity } from '../../../model'

export const fetchMembersAction = (dispatch) => {
  memberAPI.fetchMembers().then(members => {
    // 交给下一个动作
    dispatch(fetchMembersCompleted(members))
  })
}

const fetchMembersCompleted = (members: MemberEntity[]) => ({
  type: 'FETCH_MEMBER_COMPLETED',
  payload: members
})