import React from 'react';
import { View, FlatList } from 'react-native';
import CardHero from '../components/CardHero'; // ajuste o caminho se necessário

const heroes = [
  {
    id: "1",
    nome: "Lady Geist",
    ult: "Soul Exchange",
    vantagem: "Drena a vida dos inimigos enquanto recupera sua própria saúde.",
    fraqueza: "Consome sua própria vida para lançar habilidades poderosas.",
    imagem: "https://deadlocked.wiki/images/thumb/e/e8/Lady_Geist_card.png/200px-Lady_Geist_card.png",
  },
  {
    id: "2",
    nome: "Infernus",
    ult: "Concussive Combustion",
    vantagem: "Aumenta a velocidade e ignita inimigos com poderosas chamas.",
    fraqueza: "Dependente de habilidades de controle de fogo; pode ser vulnerável a ataques físicos.",
    imagem: "https://deadlocked.wiki/images/thumb/6/6b/Infernus_card.png/200px-Infernus_card.png",
  },
  {
    id: "3",
    nome: "Haze",
    ult: "Bullet Dance",
    vantagem: "Especialista em eliminar inimigos de forma silenciosa e eficiente.",
    fraqueza: "Dependente de habilidades de furtividade; vulnerável em combate aberto.",
    imagem: "https://deadlocked.wiki/images/1/1b/Haze_card.png",
  },
  {
    id: "4",
    nome: "Grey Talon",
    ult: "Spirit Owl",
    vantagem: "Combate à distância com armadilhas e um poderoso arco.",
    fraqueza: "Vulnerável em combate corpo a corpo, depende de distância.",
    imagem: "https://deadlocked.wiki/images/5/5a/Grey_Talon_card.png",
  },
  {
    id: "5",
    nome: "Yamato",
    ult: "Shadow Transformation",
    vantagem: "Usa ataques de espada precisos e pode se curar durante o combate.",
    fraqueza: "Dependente de engajamento próximo; vulnerável se não conseguir se aproximar.",
    imagem: "https://deadlocked.wiki/images/2/2b/Yamato_card.png",
  },
  {
    id: "6",
    nome: "Ivy",
    ult: "Air Drop",
    vantagem: "Suporte e controle de campo com habilidades de cura e voo.",
    fraqueza: "Depende de aliados para maximizar seu potencial de suporte.",
    imagem: "https://deadlocked.wiki/images/2/2c/Ivy_card.png",
  }
];

export default function Heroes() {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={heroes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardHero hero={item} />
        )}
      />
    </View>
  );
}