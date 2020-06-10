export const todoListRender = (todoItem) =>
  `<li data-id=${todoItem.id} class=${todoItem.isCompleted ? "completed" : "" } >
<div class="view">
  <input class="toggle" type="checkbox" ${todoItem.isCompleted ? "checked" : ""}>
  <label class="label">${todoItem.content}</label>
<button class="destroy"></button>
  </div>
  <input class="edit" value="${todoItem.content}">
  </li>`