import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardHero({ hero }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detalhes dos Heróis", { hero })}
      style={styles.hero}
    >
      <Image source={{ uri: hero.imagem }} style={styles.image} />
      <Text style={styles.nome}>{hero.nome}</Text>
      <Text style={styles.ult}>{hero.ult}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  hero: {
    flexDirection: 'column',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  image: {
    width: 100,  // largura da imagem
    height: 100, // altura da imagem
    borderRadius: 50, // metade da largura/altura para círculo
    marginBottom: 10,
    overflow: 'hidden', // garantir que a imagem não extrapole o círculo
  },
  ult: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: '#fff',
  },
});