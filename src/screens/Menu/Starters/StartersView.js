import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {Food} from '../Food';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../../../redux/actions/index';
import {retrieveData} from '../../../utils/DataStorage';
import * as CONSTANTS from '../../../constants/keys';
import {styles} from '../styles/DefaultFoodStyles';

const StartersView = ({navigation}) => {
  const starters = useSelector(state => state.startersReducer.starters);
  const dispatch = useDispatch();
  const loadScene = startersDetail => {
    navigation.navigate('StarterDetailsView', startersDetail);
  };

  useEffect(() => {
    retrieveData(CONSTANTS.STARTERS_DATA_KEY).then(data =>
      dispatch(actions.callGetStartersData(data)),
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        keyExtractor={item => item.id}
        data={starters}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 75}}
        renderItem={({item}) => (
          <Food item={item} onOpenRecipe={loadScene}></Food>
        )}
      />
    </View>
  );
};

export default StartersView;
