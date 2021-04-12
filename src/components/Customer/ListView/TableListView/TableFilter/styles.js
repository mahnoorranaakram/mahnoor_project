export const styles = (theme) => ({
    tablefilterwrapper: {
      display:'flex',
      position: 'absolute',
      top: 220,
      left: 982,
      borderBottom:'1px solid grey',
      boxShadow: '1px 0px 10px -2px #dcdbdb',
      borderRadius:10,
    "& .mainfiltergrid":{
      display:'flex',
      flexDirection:'column',
      "& .headerfilter":{
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        backgroundColor: '#FAFAFA',
          padding: 14,
          borderRadius: 6,
          fontSize: 17,
          color: '#1875F0'
      },
      "& .filtergridrow":{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        "& .filtertitle":{
          minWidth: 268,
          marginBottom:22,
          
        }
      },
    }
    },
   
  });
  