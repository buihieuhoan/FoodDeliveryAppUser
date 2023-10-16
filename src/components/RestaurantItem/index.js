import { StyleSheet, Text, View, Image } from 'react-native';

const RestaurantItem = ({ restaurant }) => {
  return (
      <View style={styles.restaurantContainer}>
        <Image 
          source={{
            uri:restaurant.image,
          }} 
          style={styles.image}
        />
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
            $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
            {restaurant.maxDeliveryTime} minutes 
        </Text>
      </View>
  )
}

export default RestaurantItem

const styles = StyleSheet.create({
    restaurantContainer: {
      width: '100%',
      marginVertical: 5,
    },
    image: {
      width:'100%',
      aspectRatio: 5/3,
      marginBottom: 5,
    },
    title: {
      fontSize: 20,
      fontWeight: '500',
      verticalAlign: 5,
    },
    subtitle: {
      color: 'gray'
    },
  });