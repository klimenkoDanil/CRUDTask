import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {Food} from '../Food';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../../../redux/actions/index';
import {retrieveData} from '../../../utils/DataStorage';
import * as CONSTANTS from '../../../constants/keys';
import {styles} from '../styles/DefaultFoodStyles';
const SnacksView = ({navigation}) => {
  const snacks = useSelector(state => state.snacksReducer.snacks);
  const dispatch = useDispatch();
  const loadScene = snacksDetail => {
    navigation.navigate('SnackDetailsView', snacksDetail);
  };

  useEffect(() => {
    retrieveData(CONSTANTS.SNACKS_DATA_KEY).then(data =>
      dispatch(actions.callGetSnacksData(data)),
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        keyExtractor={item => item.id}
        data={snacks}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 75}}
        renderItem={({item}) => (
          <Food item={item} onOpenRecipe={loadScene}></Food>
        )}
      />
    </View>
  );
};

export default SnacksView;
