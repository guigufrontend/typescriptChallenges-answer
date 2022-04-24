// your answers
type TreeNode = {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
  };
  
  type InorderTraversal<T extends TreeNode | null, U extends TreeNode = NonNullable<T>>
  = T extends U
  ? [...InorderTraversal<T["left"]>, T["val"], ...InorderTraversal<T["right"]>]
  : [];