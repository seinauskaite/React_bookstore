import "./App.css";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import BooksList from "./books/BooksList";
import Range from "./books/Range";
import Cart from "./books/Cart";
import Books from "./Functions/Books";

function App() {
  const [books, setBooks] = useState([]); ///skirtas atvaizdavimui
  const [likes, setLikes] = useState(new Set());
  const [timer, setTimer] = useState(0);
  const change = useRef(false);
  const timerId = useRef();
  const loaded = useRef(false);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    timerId.current = setInterval(() => {
      if (change.current) {
        setTimer((t) => t + 1);
        console.log("tik tak chage");
        change.current = false;
      } else {
        console.log("tik tak no");
      }
    }, 5000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    axios.get("https://in3.dev/knygos/").then((res) => {
      booksStore.current = res.data;
      setBooks([...booksStore.current]);
      setDataReceived(true);
      let min = booksStore.current[0].price;
      let max = booksStore.current[1].price;
      booksStore.current.forEach((b) => {
        min = min > b.price ? b.price : min;
        max = max < b.price ? b.price : max;
      });
      setMinMax([min, max]);
      setFilter(min);
    });
  }, []);

  useEffect(() => {
    let l = localStorage.getItem("booksLikes");
    if (null === l) {
      l = JSON.stringify([]);
    }
    l = JSON.parse(l);
    setLikes(new Set(l));
  }, []);

  useEffect(() => {
    if (loaded.current) {
      localStorage.setItem("booksLikes", JSON.stringify([...likes]));
    }
    loaded.current = true;
  }, [timer]);

  // useEffect(() => {
  //   const booksCopy = [...booksStore.current];
  //   switch (sort) {
  //     case "asc":
  //       booksCopy.sort((a, b) => a.price - b.price);
  //       break;
  //     case "desc":
  //       booksCopy.sort((b, a) => a.price - b.price);
  //       break;
  //     default:
  //   }
  //   setBooks(booksCopy);
  // }, [sort]);

  // useEffect(() => {
  //   setBooks(booksStore.current.filter((b) => b.price > filter));
  // }, [filter]);

  ///////////////////////////////////////////////            REDUCERIS             >>>>>>>>>>>>>>

  useEffect(() => {
    const actionObject = {
      type: "change list", ///// nereik - iliustracija
      payload: {
        filter: filter,
        sort: sort,
      },
    };
    doChangeList(actionObject);
  }, [filter, sort]);

  const doChangeList = (action) => {
    const booksCopy = [...booksStore.current];
    switch (action.payload.sort) {
      case "asc":
        booksCopy.sort((a, b) => a.price - b.price);
        break;
      case "desc":
        booksCopy.sort((b, a) => a.price - b.price);
        break;
      default:
    }
    setBooks(booksCopy.filter((b) => b.price > action.payload.filter));
  };

  const likeButtonPressed = (id) => {
    change.current = true;
    const likesCopy = new Set(likes); // fancy kopija
    likesCopy.has(id) ? likesCopy.delete(id) : likesCopy.add(id);
    setLikes(likesCopy);
  };

  //////////// CART

  // const cart = [
  //   { id: 2, count: 1 },
  //   { id: 4, count: 2 },
  //   { id: 7, count: 1 },
  // ];

  const addButtonClicked = (id) => {
    setCart((c) => Books.addToCart(id, c));
  };

  const [minMax, setMinMax] = useState([0, 0]);
  const [showCart, setShowCart] = useState(0);
  const [cartView, setCartView] = useState([]);
  const booksStore = useRef([]); // Master store
  const [dataReceived, setDataReceived] = useState(false); // duomenys gauti
  const [booksCartCount, setBooksCartCount] = useState(0);
  const [booksCartTotal, setBooksCartTotal] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (!dataReceived) {
      return;
    }

    setCartView(Books.getCartView(cart, booksStore.current));
  }, [dataReceived]);

  useEffect(() => {
    setBooksCartCount(Books.getCartCount(cart));
  }, []);

  useEffect(() => {
    if (!dataReceived) {
      return;
    }
    setBooksCartTotal(Books.getCartTotal(cart, booksStore.current));
  }, [dataReceived]);

  return (
    <>
      <div className="App">
        <h1>Book store</h1>
        <div>
          <div className="count">{booksCartCount}</div>
          <svg className="cart" onClick={() => setShowCart((s) => !s)}>
            <use xlinkHref="#cart"></use>
          </svg>
          <span className="count">{booksCartCount}</span>
        </div>
        <div className="bin">
          <Cart
            showCart={showCart}
            setShowCart={setShowCart}
            cartView={cartView}
          ></Cart>
        </div>
        <div className="kvc">
          <svg onClick={() => setSort("asc")} className="arrowUp">
            <use xlinkHref="#arrow"></use>
          </svg>
          <svg onClick={() => setSort("desc")} className="arrowDown">
            <use xlinkHref="#arrow"></use>
          </svg>
          <Range filter={filter} setFilter={setFilter} minMax={minMax}></Range>
        </div>

        <BooksList
          likeButtonPressed={likeButtonPressed}
          books={books}
          likes={likes}
          addButtonClicked={addButtonClicked}
        ></BooksList>
      </div>
    </>
  );
}

export default App;
