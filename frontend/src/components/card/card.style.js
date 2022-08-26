import { StyleSheet } from 'react-native'

export const cardStyle = StyleSheet.create({
    content: {
        marginVertical: 20
    },
    view: {
        paddingTop: '1rem',
        width:'80%',        
        background: 'url("https://images.unsplash.com/photo-1574007557239-acf6863bc375?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80")',
        shadowColor: "#fff",
        shadowOffset: 50,        
    },
    bottomLine: {
        margin: 10,
        alignSelf: 'flex-end'
    },
    image: {
        marginHorizontal: 10,
        borderRadius: 5
    }
})

/*
.container {
 background: url("https://images.unsplash.com/photo-1574007557239-acf6863bc375?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80");
 background-repeat: no-repeat;
 background-position: center;
 background-size: cover;
 width: 350px;
 height: 500px;
 position: relative;
 box-shadow: 0 0 50px rgba(0, 0, 0, 0.315);
 .container__info {
  @include bottom;
  bottom: 20%;
  display: flex;
  align-items: flex-end;
  padding: 15px 30px;
  color: $bright-color;
  span {
   margin-right: 20px;
  }
  i {
   margin-right: 10px;
  }
 }
 .container__profile {
  background-color: #e4f2fd;
  display: flex;
  align-items: center;
  padding: 20px;
  @include bottom();
  bottom: 0;
  img {
   width: 60px;
   height: 60px;
   border-radius: 50%;
   object-position: center;
   object-fit: cover;
   margin-right: 10px;
  }
  h2 {
   color: #334454;
   font-size: 1.2rem;
  }
  p {
   color: #a1b2bc;
   font-size: 0.8rem;
  }
  p b {
   font-style: italic;
  }
 }
  */