//API:
//insert添加一个子树，传值Number
//bulkInsert批量添加子树，传值Array
//showTree返回二叉树对象
class BinaryTree {
    constructor(tree = []) {
        this.root = null; //树根
        this.Node = key => {
            //生成一个新的子树
            let _obj = Object.create(null, {});
            _obj.key = key;
            _obj.left = null;
            _obj.right = null;
            return _obj;
        };
        //初始化二叉树
        if (typeof tree === 'number') {
            this.insert(tree);
        } else if (Array.isArray(tree)) {
            this.bulkInsert(tree);
        } else {
            console.error('请输入Number类型或者Array类型的参数');
        }
    }
    insert(key) {
        //添加一个新子树
        let newNode = this.Node(key);
        let _insertNode = (node, newNode) => {
            //判断新二叉树的值和原有节点的值
            if (newNode.key < node.key) {
                if (node.left === null) {
                    //判断左节点是否为空
                    node.left = newNode;
                } else {
                    _insertNode(node.left, newNode);
                }
            } else {
                if (node.right === null) {
                    //判断右节点是否为空
                    node.right = newNode;
                } else {
                    _insertNode(node.right, newNode);
                }
            }
        };
        if (this.root === null) {
            //如果没有根节点，那么把传入的值当根节点
            this.root = newNode;
        } else {
            //如果有根节点，那么把传入的值插到二叉树上
            _insertNode(this.root, newNode);
        }
    }
    bulkInsert(nodes) {
        nodes.forEach(key => {
            //遍历数组，插入子树
            this.insert(key);
        });
    }
    showTree() {
        //返回二叉树对象
        return this.root;
    }
}

let nodes = [8, 3, 6, 4, 9, 11, 2, 5, 7];
let binaryTree = new BinaryTree(nodes);
let tree = binaryTree.showTree();

console.log(tree);
