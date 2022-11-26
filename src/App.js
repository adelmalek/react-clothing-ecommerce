import Directory from './components/directory/directory.jsx';

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      /*imageUrl: "https://i.ibb.co/cvpntL1/hats.png"*/
    },
    {
      id: 2,
      title: 'Sunglasses',
      imageUrl: "https://images.unsplash.com/photo-1508296695146-257a814070b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
      /*imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"*/
    },
    {
      id: 3,
      title: 'Bags',
      imageUrl: "https://images.unsplash.com/photo-1630750793250-71173d8bfa5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      /*imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"*/
    },
    {
      id: 4,
      title: 'Women',
      imageUrl: "https://images.unsplash.com/photo-1616769186373-bc4943852aeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
      /*imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"*/
    },
    {
      id: 5,
      title: 'Men',
      imageUrl: "https://images.unsplash.com/photo-1532649842991-60f6a04df35d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      /*imageUrl: "https://i.ibb.co/R70vBrQ/men.png"*/
    }
  ];

  return (
    <Directory categories={categories}/>
  )
}

export default App;
