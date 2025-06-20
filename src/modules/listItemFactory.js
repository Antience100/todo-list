export function listItemFactory(
  title,
  description,
  dueDate,
  priority,
  checklist
) {
  function itemInfo() {}
  return {
    title,
    description,
    dueDate,
    priority,
    checklist,
    itemInfo: function () {
      console.log(this);
    },
  };
}
