function* haha(){
  yield console.log('hello');
  yield console.log('world');
  console.log('ending'); 
}
let t = haha()
// t.next()
// t.next()
// t.next()