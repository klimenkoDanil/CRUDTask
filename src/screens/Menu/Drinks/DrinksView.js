import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {Food} from '../Food';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../../../redux/actions/index';
import {retrieveData} from '../../../utils/DataStorage';
import * as CONSTANTS from '../../../constants/keys';
import {styles} from '../styles/DefaultFoodStyles';

const DrinksView = ({navigation}) => {
  const drinks = useSelector(state => state.drinksReducer.drinks);
  const dispatch = useDispatch();
  const loadScene = drinksDetail => {
    navigation.navigate('DrinkDetailsView', drinksDetail);
  };

  useEffect(() => {
    retrieveData(CONSTANTS.DRINKS_DATA_KEY).then(data =>
      dispatch(actions.callGetDrinksData(data)),
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        keyExtractor={item => item.id}
        data={drinks}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 75}}
        renderItem={({item}) => (
          <Food item={item} onOpenRecipe={loadScene}></Food>
        )}
      />
    </View>
  );
};

export default DrinksView;
