export default {
  adminList: state => {
    const idx = state.admin_list.findIndex(el => el.id == crrUser.id)
    idx < 0 ? false : state.admin_list.splice(idx, 1)
    return state.admin_list
  }
}
