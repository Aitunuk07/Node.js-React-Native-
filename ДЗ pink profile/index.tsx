import { DancingScript_400Regular, useFonts } from '@expo-google-fonts/dancing-script';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef } from 'react';
import { Animated, Easing, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function HomeScreen() {
  const [fontsLoaded] = useFonts({ DancingScript_400Regular });
  const scale = useRef(new Animated.Value(1)).current;
  const fade = useRef(new Animated.Value(0)).current;  
  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fade, {  
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1.05, duration: 1000, useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 1, duration: 1000, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  if (!fontsLoaded) return null;

  const onPressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <LinearGradient colors={['#FFF5F8', '#FFE6F0']} style={styles.container}>
      <Animated.View style={{ opacity: fade, alignItems: 'center' }}>

      {/* Аватар */}
      <Image
        source={{
          uri: 'https://i.pinimg.com/736x/0e/f5/cf/0ef5cfad7ff093861cab0fcac8b299d9.jpg',
        }}
        style={[styles.avatar, { transform: [{ scale: pulse }] }]}
      />

      {/* Имя */}
      <Text style={styles.name}>Aitunuk</Text>

      {/* Курс */}
      <Text style={styles.course}>React Native • Expo</Text>

      {/* Описание */}
      <Text style={styles.bio}>
        Future mobile developer. Learning React Native and building cool apps 🚀
      </Text>

      {/* Анимированная кнопка */}
      <Animated.View style={{ transform: [{ scale }] }}>
        <TouchableOpacity
          onPress={() => alert('Спасибо за просмотр 💗💗💗')}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
        >
           <LinearGradient
              colors={['#FFD1DC', '#FF9EBB']}
              style={styles.buttonGradient}
            >
          <Text style={styles.buttonText}>View Profile</Text>
          </LinearGradient>
        </TouchableOpacity>
      </Animated.View>

  {/* Интересы */}
        <View style={styles.interests}>
         <Text style={styles.interestText}>💖 Coffee Lover</Text>
         <Text style={styles.interestText}>🎀 Music Fan</Text>
         <Text style={styles.interestText}>🌸 Coding Girl</Text>

    </View>
    </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: '#FFCCD5',
    marginBottom: 20,
  },

  name: {
    fontSize: 32,
    fontFamily: 'DancingScript_400Regular',
    color: '#333333',
  },

  course: {
    fontSize: 18,
    color: '#FF6F91',
    marginTop: 4,
    fontFamily: 'DancingScript_400Regular',
  },

  bio: {
    textAlign: 'center',
    color: '#666666',
    marginVertical: 20,
    fontSize: 16,
    fontFamily: 'DancingScript_400Regular',
  },

  buttonGradient: {
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 30,
    shadowColor: '#FFB6C1',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 6,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

   interests: {
    marginTop: 20,
    alignItems: 'center',
  },

  interestText: {
    fontSize: 16,
    color: '#FF4C8B',
    marginVertical: 2,
    fontFamily: 'DancingScript_400Regular',

  },
});