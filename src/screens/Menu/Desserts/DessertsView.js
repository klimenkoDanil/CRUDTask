import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {Food} from '../Food';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../../../redux/actions/index';
import {retrieveData} from '../../../utils/DataStorage';
import * as CONSTANTS from '../../../constants/keys';
import {styles} from '../styles/DefaultFoodStyles';
const DessertsView = ({navigation}) => {
  const desserts = useSelector(state => state.dessertsReducer.desserts);
  const dispatch = useDispatch();
  const loadScene = dessertDetail => {
    navigation.navigate('DessertDetailsView', dessertDetail);
  };

  useEffect(() => {
    retrieveData(CONSTANTS.DESSERTS_DATA_KEY).then(data =>
      dispatch(actions.callGetDessertsData(data)),
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        keyExtractor={item => item.id}
        data={desserts}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 75}}
        renderItem={({item}) => (
          <Food item={item} onOpenRecipe={loadScene}></Food>
        )}
      />
    </View>
  );
};

export default DessertsView;
