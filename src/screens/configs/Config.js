import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StatusBar, Alert, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Button from "../../components/button/Button";
import {
  createCount,
  deleteCount,
  updateCount,
} from "../../store/counters/counters.action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

const Config = ({ route }) => {
  const id = route?.params?.id;
  const { navigate } = useNavigation();

  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const counters = useSelector((state) => state.counters.counters);

  const sum = useCallback(() => {
    setCounter((oldValue) => oldValue + 1);
  }, []);

  const subtract = useCallback(() => {
    setCounter((oldValue) => oldValue - 1);
  }, []);

  const clearValues = useCallback(() => {
    setCounter(0);
    setName("");
  }, []);

  const onRegister = useCallback(() => {
    const id = (Math.random() * 100).toFixed().toString();
    const values = { id, counterValue: counter, name };
    if (!name) {
      return Alert.alert("Campo inválido", "Insira um nome válido", [
        { text: "OK" },
      ]);
    }
    Alert.alert("Sucesso", "Contador adicionado", [{ text: "OK" }]);
    navigate("Counters");
    dispatch(createCount(values));
  }, [dispatch, counter, name, navigate]);

  const onUpdate = useCallback(() => {
    Alert.alert("Atualizado", "Contador atualizado", [{ text: "OK" }]);
    navigate("Counters");
    const values = { id, counterValue: counter, name };
    dispatch(updateCount(values));
  }, [dispatch, counter, name, id]);

  const onDelete = useCallback(() => {
    Alert.alert("Deletado", "Contador deletado", [{ text: "OK" }]);
    navigate("Counters");
    dispatch(deleteCount(id));
  }, [dispatch, id, navigate]);

  useEffect(() => {
    counters.filter((counter) => {
      if (id === counter.id) {
        setName(counter.name);
        setCounter(counter.counterValue);
      }
    });
  }, [id]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        // backgroundColor: "#0082C9",
      }}
    >
      <StatusBar backgroundColor="#001C47" barStyle="light-content" />
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginTop: 30,
          color: "#2B404C",
        }}
      >
        Contadores
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          title="Adicionar contador"
          onPress={() => onRegister()}
          icon={<Icon name={"plus"} style={{ fontSize: 30 }} />}
        />
        <Button
          title="Zerar valores"
          onPress={() => clearValues()}
          icon={<Icon name={"sliders"} style={{ fontSize: 30 }} />}
        />
      </View>

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginTop: "40%",
          marginBottom: 20,
          color: "#2B404C",
        }}
      >
        {" "}
        Contador selecionado
      </Text>
      <View style={{ width: "90%", alignItems: "center" }}>
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Nome do contador"
          style={{
            backgroundColor: "white",
            height: 50,
            width: "100%",
            marginBottom: 10,
            paddingLeft: 10,
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,

            elevation: 9,
          }}
        />

        <View
          style={{
            height: "20%",
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#FFF",
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,

            elevation: 9,
          }}
        >
          <TouchableOpacity
            onPress={(value) => subtract(value)}
            style={{ marginRight: 90, width: 50, alignItems: "center" }}
          >
            <Text style={{ fontSize: 40, color: "#001C47" }}>-</Text>
          </TouchableOpacity>

          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 40, color: "#001C47" }}>{counter}</Text>
          </View>

          <TouchableOpacity
            onPress={(value) => sum(value)}
            style={{
              marginLeft: 90,
              width: 50,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 40, color: "#001C47" }}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Button
            title="Atualizar contador"
            onPress={() => onUpdate()}
            icon={<Icon name={"edit"} style={{ fontSize: 30 }} />}
          />
          <Button
            title="Remover contador"
            onPress={() => onDelete()}
            disabled={id ? false : true}
            icon={<Icon name={"trash-2"} style={{ fontSize: 30 }} />}
          />
        </View>
      </View>
    </View>
  );
};

export default Config;
