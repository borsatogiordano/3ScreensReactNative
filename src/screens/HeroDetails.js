import { useRoute } from '@react-navigation/native';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

export default function HeroDetails() {
  const route = useRoute();
  const { hero } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Detalhes do Herói</Text>
      <Image source={{ uri: hero.imagem }} style={styles.image} />
      <Text style={styles.label}>Nome do Hero:</Text>
      <Text style={styles.info}>{hero.nome}</Text>
      <Text style={styles.label}>Ult:</Text>
      <Text style={styles.info}>{hero.ult}</Text>
      <Text style={styles.label}>Vantagem:</Text>
      <Text style={styles.info}>{hero.vantagem}</Text>
      <Text style={styles.label}>Fraqueza:</Text>
      <Text style={styles.info}>{hero.fraqueza}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: 20,
  },
  titulo: {
    fontSize: 32,
    color: '#FFD700',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '600',
    marginVertical: 5,
  },
  info: {
    fontSize: 18,
    color: '#f0f0f0',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
});