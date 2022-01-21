import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {Food} from '../Food';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../../../redux/actions/index';
import {retrieveData} from '../../../utils/DataStorage';
import * as CONSTANTS from '../../../constants/keys';
import {styles} from '../styles/DefaultFoodStyles';
const MainCoursesView = ({navigation}) => {
  const mainCourses = useSelector(
    state => state.mainCoursesReducer.mainCourses,
  );
  const dispatch = useDispatch();
  const loadScene = mainCoursesDetail => {
    navigation.navigate('MainCourseDetailsView', mainCoursesDetail);
  };

  useEffect(() => {
    retrieveData(CONSTANTS.MAIN_COURSES_DATA_KEY).then(data =>
      dispatch(actions.callGetMainCoursesData(data)),
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        keyExtractor={item => item.id}
        data={mainCourses}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 75}}
        renderItem={({item}) => (
          <Food item={item} onOpenRecipe={loadScene}></Food>
        )}
      />
    </View>
  );
};

export default MainCoursesView;
