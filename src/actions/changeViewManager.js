export const CHANGE_VIEW_MANAGER_CURRENT = 'CHANGE_VIEW_MANAGER_CURRENT';
export const CHANGE_VIEW_MANAGER_PREVIOUS = 'CHANGE_VIEW_MANAGER_PREVIOUS';

export const changeCurrent = (text) => {
  console.log('changeCurrent actions')
  return {
    type:CHANGE_VIEW_MANAGER_CURRENT,
    text
  }
}
export const changePreivous= (text) => {
  console.log('changeCurrent actions')
  return {
    type:CHANGE_VIEW_MANAGER_PREVIOUS,
    text
  }
}
