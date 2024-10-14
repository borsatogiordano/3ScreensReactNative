import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Inicio() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heroes}>Heróis do Deadlock</Text>
      <Image
        source={{ uri: 'https://assets-prd.ignimgs.com/2024/08/23/deadlock-image-1724453496539.png' }}
        style={styles.image}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Lista de Heróis')}
      >
        <Text style={styles.buttonText}>Ir para lista de Heróis</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, 
  },
  heroes: {
    color: '#FFD700', 
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 20, 
  },
  image: {
    width: 250, 
    height: 250,
    borderRadius: 15, 
    marginBottom: 30, 
    borderWidth: 3, //
    borderColor: '#FFD700', 
  },
  button: {
    margin: 10,
    padding: 15, 
    backgroundColor: '#FFD700',
    borderRadius: 10, 
    elevation: 5, 
  },
  buttonText: {
    color: '#1e1e1e', 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});