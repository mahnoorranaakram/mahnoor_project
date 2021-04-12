export const styles = (theme) => ({
  tablelistwrapper: {
    display: "flex",
    justifyContent: "space-between",
    "& .scrollfullpageicon":{
      fontSize: 24
    },
    "& .imagemaintable": {
        marginTop:15,
        "& .maplisttableimg":{
          marginBottom:18
        },
        "& .imgproduct":{
          height:50,
          width:70
        },
    },    
    "& .maplisttable": {
      paddingTop: 25,
      marginLeft: 10,
    },
    "& .maplisttableimg": {
      width: 50,
      height: 40,
    },
    "& .doticon":{
      fontSize:10,
      color: '#1875F0',
      marginRight:10
    },
    "& .dellisticon":{
      fontSize:15
    }

  },
  // maplisttablewrapper: {
  //   display: "flex",
  //   flexDirection: "column",
  //   "& .maplisttable": {
  //     paddingTop: 20,
  //   },
  // },
});
