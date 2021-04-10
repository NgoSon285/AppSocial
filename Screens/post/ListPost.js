import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView,
  Alert,
} from 'react-native';
import {
  Container,
  Header,
  Textarea,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import {styles} from '../auth/style';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PostAction from '../../redux/actions/postAction';

const ListPost = ({data, post, infoProfile, navigation}) => {
  const [contenPost, setContenPost] = useState('');

  // const date = new Date();
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    post.getAllPost();
  };
  const createAPost = () => {
    if (contenPost !== '') {
      post.createPost(contenPost);
    } else {
      Alert.alert('!!!!', 'Say Something......');
    }
    getPosts();
  };
  const removeAPost = (id) => {
    if (data) {
      data.filter((post) => {
        return post._id !== id;
      });
    }
    post.deletePost(id);
    getPosts();
  };
  const likeAPost = async (id) => {
    if (data) {
      data.map((item) => {
        if (item._id == id) {
          if (item.likes.length > 1) {
            item.likes.map((user) => {
              if (user.user !== infoProfile.user._id) {
                item.likes.unshift(infoProfile.user._id);
              }
            });
          } else {
            item.likes.push(infoProfile.user._id);
          }
        }
      });
    }
    post.likePost(id);
    await getPosts();
  };

  const unLikeAPost = (id) => {
    if (data) {
      data.map((item) => {
        if (item._id == id) {
          if (item.likes.length > 1) {
            item.likes.filter((user) => {
              return user != infoProfile.user._id;
            });
          }
        }
      });
    }
    post.unLikePost(id);
    getPosts();
  };
  const nextScreenDetail = (data) => {
    navigation.navigate('postDetail', data);
  };

  console.log('fist data', data);
  // console.log('data', newData);

  return (
    <ScrollView style={styles.container}>
      <View style={{paddingHorizontal: 10}}>
        <Text style={styles.titleDashboard}>Post</Text>
        <Text style={styles.subTitleDashboard}>
          <Icon type="Ionicons" name="person" />
          Welcome to the community
        </Text>
        <Text style={styles.titleListPost}>Say Something....</Text>
        <Textarea
          rowSpan={5}
          bordered
          placeholder="Create a post"
          value={contenPost}
          onChangeText={(text) => {
            setContenPost(text);
          }}
        />
        <TouchableOpacity
          style={styles.buttonSubmit}
          onPress={() => {
            createAPost();
          }}>
          <Text style={{color: 'white'}}>Submit</Text>
        </TouchableOpacity>
        {data == null ? (
          <View>
            <ActivityIndicator size={'large'} color={'blue'} />
          </View>
        ) : (
          data.map((item, index) => {
            return (
              <View key={index} style={styles.post}>
                <View style={styles.itemPost}>
                  <Image
                    source={{uri: `${item.avatar}`}}
                    style={styles.imagePost}
                  />
                  <Text style={styles.subTitle}>{item.name}</Text>
                  <View></View>
                </View>
                <Text>{item.text}</Text>
                <Text style={styles.post_date}>{`Poster on ${item.date.slice(
                  0,
                  10,
                )}`}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Button
                    transparent
                    onPress={() => {
                      likeAPost(item._id);
                    }}>
                    <Icon
                      active
                      name="thumbs-up"
                      style={{fontSize: 20, color: 'black'}}
                    />
                    <Text>{item.likes.length} Likes</Text>
                  </Button>
                  <Button
                    transparent
                    onPress={() => {
                      unLikeAPost(item._id);
                    }}>
                    <Icon
                      active
                      name="thumbs-down"
                      style={{fontSize: 20, color: 'black'}}
                    />
                  </Button>
                  <Button
                    transparent
                    onPress={() => {
                      nextScreenDetail(item);
                    }}>
                    <Icon
                      active
                      name="chatbubbles"
                      style={{fontSize: 20, color: 'black'}}
                    />
                    <Text>{item.comments.length} Comments</Text>
                  </Button>
                  {item.user == infoProfile.user._id ? (
                    <TouchableOpacity
                      onPress={() => {
                        removeAPost(item._id);
                      }}>
                      <Icon
                        name="delete"
                        type="MaterialCommunityIcons"
                        style={{fontSize: 20, color: 'black'}}
                      />
                    </TouchableOpacity>
                  ) : (
                    <Text></Text>
                  )}
                </View>
              </View>
            );
          })
        )}
      </View>
    </ScrollView>
  );
};
const mapStateToProps = (state) => ({
  data: state.postReducer.data,
  infoProfile: state.profileReducer.data,
});
const mapDispatchToProps = (dispatch) => ({
  post: bindActionCreators(PostAction, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(ListPost);
