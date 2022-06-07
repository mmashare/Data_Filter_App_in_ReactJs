import React, { useEffect, useState } from "react";
import SearchBar from "../../components/searchBar";
import FilterPanel from "../../components/filterpanel";
import List from "../../components/list";
import styles from "./home.module.css";
import { dataList } from "../../data/index";
import EmptyView from "../../components/EmptyView"

const Home = () => {
  
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [Cusines, setCusines] = useState([
    {
      id: 1,
      checked: false,
      label: "American",
    },
    {
      id: 2,
      checked: false,
      label: "Chinese",
    },
    {
      id: 3,
      checked: false,
      label: "Italian",
    },
  ]);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [list, setList] = useState(dataList);

  const [inputSearch,setSearchInput] = useState("")

 
  
  

  const handleSelectCategory = (e, value) => {
    return !value ? null : setSelectedCategory(value);
  };
  const handleSelectRating = (e, value) => {
    return !value ? null : setSelectedRating(value);
  };
  const handlechangeChecked = (id) => {
    const cusineStateList = Cusines;
    const changeCheckedCusines = cusineStateList.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    return setCusines(changeCheckedCusines);
  };

  const handleChangePrice = (e, value) => {
    return setSelectedPrice(value);
  };

  const applyFilter = () => {
    // basically if you ussed db and api too fir iss var me get req ka data store karo because ham iss var ko sat sari 
    // process karege.
    let UpdateList = dataList;
    
      // show item according to rating
    if (selectedRating) {
      UpdateList = UpdateList.filter((item) => {
        return parseInt(item.rating)===parseInt(selectedRating);
      });
    }

    // show item according to category
      if(selectedCategory){
      UpdateList=UpdateList.filter((i)=>{
        return i.category===selectedCategory
      })
    }
      ////// show item according to cusines /////////// 
      
      // phale to ham [] me se only unn items ko filter karege jinke item.checked==true hai(don't be confuse ke filter ko kese pata ki item.checked true hai ya false because .filter hamme unn items ko send karta hai jinki value true hoti hai)
      // then unn item ke label ko lower case kar karke cusinefilterMap variable me store kar dege 
     const CusinfilterMap = Cusines.filter((item)=>item.checked).map((item)=>item.label.toLowerCase()) 
    // yaha ham phale cusinfilterMap ki length check karege ki is var ki length bhi means isske ander kuch item aye bhi hai ya nhi 
    // manlo koi chusin checked nhi hai to ham updateList var me innse store nhi karege then
    if (CusinfilterMap.length){
      // yaha ham UpdateList me filter method lagege then CusinFiltreMap.include() method ki help se check karege ki UpdateList 
      // ke cusine CusinFilterMap var ki cusine se match kar rahe hai ya nhi if true then filter unn cusin kio return karke store kar dega UpdateList var me 
      UpdateList=UpdateList.filter((item)=>CusinfilterMap.includes(item.cuisine))
    }

    ////// // show item according to price //////////
    // yaha phale ham do va banege and unme selectedPrice state ki 0th and Last index ko store karege
    const minimumPrice = selectedPrice[0]
    const miximumPrice = selectedPrice[1]

    // then ham UpdateList me filter method layege and check karge ki minimumPrice state ka price ager item.Price minimumPrice var ke >= hona chiye and item.price <= miximumprice var se chota hona chiye
    // ager ye condition true hoti hai too unn item ko UpdateList me store kar diya jayega
    UpdateList= UpdateList.filter((item)=>item.price >=minimumPrice&&item.price<=miximumPrice )


    /////// // show item according to search //////////
    // phale ham check krege ki search input me hamne kuch likha bhi hai ya nhi(ager kuch likha hoga to uss value true hogi)
    if(inputSearch){

      // yaha ham UpdateList me .filter() method lagyege and check karege ki item.title ke ander koi asa item hai jo inputSearch state ki value ke sat match ho raha hai if true then unn item ko ham UpdateList me store kar dege.
      UpdateList=UpdateList.filter((item)=>item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !== -1)
    }

    // becasue mainly hamre item display List state ki vaje se ho rahe hai to UpdateList var me jo final value ayegi vo hamre List state me store hoke show hone lag jayegi 
    setList(UpdateList)

    // basically pure applyFilter me simple logic laga hai, pahel hamen ek UpdateList var banaya then uss var ko sare states se match kiya .filter() method se 
    // and jo jo bhi value un state ki UpdateList ke map ki key value ke sat match kar rahi hai unne UpdatList me store kar rahe hai
    // basically ye process ek cycle ki tarah chal rahi hai. UpdateList var me ham Ussi ke ander se kuch data select karke vapas UpdateList me store kar rahehai 
  };

  useEffect(() => {
    // ye applyFilter func ham useEffect ke ander chalye becasue ye toda bari hoga and becasue ham chate hai ki ye func 
    // jabhi run ho jab user  kuch particlar items par click kare like searching,price filter,checks,etc
    applyFilter();
  },[selectedRating,selectedCategory,Cusines,selectedPrice,inputSearch]);

  return (
    <div className={styles.home}>
      <SearchBar value={inputSearch} changeInput={(e)=>{return setSearchInput(e.target.value)}}/>

      <div className={styles.listandfilterpanel}>
        <div className={styles.filterpanel}>
          <FilterPanel
            selectToggle={handleSelectCategory}
            selectedCategory={selectedCategory}
            selectRating={handleSelectRating}
            selectedRating={selectedRating}
            Cusines={Cusines}
            changeCusines={handlechangeChecked}
            selectedPrice={selectedPrice}
            handleChangePrice={handleChangePrice}
            
          />
        </div>

        <div className={styles.list}>
          {/* it's means tumare List state me ager empty hoga then ye emptyView component print hoga */}
          {/* and tumara List State jab hi empty hoga jab UpdateList ke saarching process me empty data send kara jayega to List State   */}
          
          {list.length ? <List list={list} />:<EmptyView/>}
        
        </div>
      </div>
    </div>
  );
};

export default Home;
