import * as React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ImageBackground
} from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import plants from '../consts/plants';
const width = Dimensions.get('window').width / 2 - 30;

const HomeScreen = ({ navigation }) => {
  const [catergoryIndex, setCategoryIndex] = React.useState(0);

  const categories = ['Whiskey', 'Wine', 'Beer', 'Cocktail'];

  const CategoryList = () => {
    return (
      <View style={{ overflow: 'hidden' }}>
        <Image style={style.banner} source={require('../../assets/special_offer.jpg')} />
        <Text style={{ color: COLORS.back, fontSize: 20, marginTop: 20, fontWeight: 'bold' }}>Categories</Text>
        <View style={style.categoryContainer}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => setCategoryIndex(index)}>
              <Text
                style={[
                  style.categoryText,
                  catergoryIndex === index && style.categoryTextSelected,
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

    );
  };

  const Card = ({ plant }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', plant)}>
        <View style={style.card}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: plant.like
                  ? 'rgba(245, 42, 42,0.2)'
                  : 'rgba(0,0,0,0.2) ',
              }}>

              <Icon
                name="favorite"
                size={18}
                color={plant.like ? COLORS.red : COLORS.black}
              />
            </View>
            <Text>250ml</Text>
          </View>

          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={plant.img}
              style={{ flex: 1, resizeMode: 'contain' }}
            />
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 10 }}>
              {plant.name}
            </Text>
            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
              ${plant.price}
            </Text>
          </View>

        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}>
      <ScrollView>
        <View style={style.header}>
          <Icon name="account-circle" color={"brown"} size={35} />
          <View style={{ flexDirection: 'row', marginRight: 30 }} >
            <Icon name="location-pin" size={20} color={"black"} />
            <Text style={{ fontSize: 16, color: "black" }} >Duxten Road, 338750</Text>
          </View>
          <Icon name="shopping-cart" size={28} color={"brown"} />
          <Icon name="notifications" size={28} color={"brown"} />
        </View>
        <View style={{ marginTop: 30, flexDirection: 'row' }}>
          <View style={style.searchContainer}>
            <Icon name="search" size={25} style={{ marginLeft: 20 }} />
            <TextInput placeholder="Search" style={style.input} />
            <Icon name="sort" size={25} style={{ marginEnd: 20 }} />
          </View>
        </View>
        <CategoryList />
        <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:10}}>
          <Text style={{ fontSize: 24, marginStart: 10 }}>Whiskey</Text>
          <Text style={{ fontSize: 18, marginEnd: 10,color:COLORS.brown }}>View all</Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
          }}
          data={plants}
          renderItem={({ item }) => {
            return <Card plant={item} />;
          }}
        />
        <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:10}}>
          <Text style={{ fontSize: 24, marginStart: 10 }}>Combos</Text>
          <Text style={{ fontSize: 18, marginEnd: 10,color:COLORS.brown }}>View all</Text>
        </View>
         <Image style={style.banner} source={require('../../assets/banner2.jpg') } />

         <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:10}}>
          <Text style={{ fontSize: 24, marginStart: 10 }}>Bars</Text>
          <Text style={{ fontSize: 18, marginEnd: 10,color:COLORS.brown }}>View all</Text>
        </View>
         <ImageBackground style={style.bar} source={require('../../assets/bar.jpg')} resizeMode='cover'>
             <View style={{backgroundColor:'#48597a',top:150, padding:10}} >
               <Text style={{fontSize:24, color:COLORS.white}}>Charlie's Bar</Text>
               <Text style={{fontSize:16, color:COLORS.white,paddingVertical:5}}>Odeon Towers Extension RootTop, Singapor</Text>
               <View style={{flexDirection:'row'}}>
                 <Icon name='star' size={20} color="#eb8034"/>
                 <Icon name='star' size={20} color="#eb8034"/>
                 <Icon name='star' size={20} color="#eb8034"/>
                 <Icon name='star'  size={20} color="#eb8034"/>
                 <Icon name='star' size={20} color="#eb8034"/>
               </View>
             </View>
         </ImageBackground>
         <Image style={style.banner} source={require('../../assets/banner1.jpg') } />
      </ScrollView>

    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    backgroundColor: '#fff',
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  categoryText: { fontSize: 16, color: 'grey', fontWeight: 'bold' },
  categoryTextSelected: {
    color: COLORS.brown,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.brown,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    height: 200,
    width: Dimensions.get('window').width-60,
    borderRadius: 15,
    borderWidth: 3,
    shadowRadius: 5,
    margin: 14,

  },
  bar:{
    height: 250,
    width: Dimensions.get('window').width,
    marginBottom:30
  }
});
export default HomeScreen;
