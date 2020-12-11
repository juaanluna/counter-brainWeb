import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StatusBar, Alert, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Button from "../../components/button/Button";
import { createCount, deleteCount } from "../../store/counters/counters.action";
import { useDispatch, useSelector } from "react-redux";

const Config = ({ route }) => {
  const id = route?.params?.id;

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

  const onRegister = useCallback(() => {
    const id = (Math.random() * 100).toFixed().toString();
    const values = { id, counterValue: counter, name };
    Alert.alert("Sucesso", "Contador adicionado", [{ text: "OK" }]);
    dispatch(createCount(values));
  }, [dispatch, counter, name]);

  const onDelete = useCallback(() => {
    Alert.alert("Sucesso", "Contador deletado", [{ text: "OK" }]);
    dispatch(deleteCount(id));
  }, [dispatch, id]);

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
        backgroundColor: "#0082C9",
      }}
    >
      <StatusBar backgroundColor="#001C47" barStyle="light-content" />
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginTop: 10,
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
        <Button title="Adicionar contador" onPress={() => onRegister()} />
        <Button
          title="Remover contador"
          onPress={() => onDelete()}
          disabled={id ? false : true}
        />
      </View>

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginTop: "50%",
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
        <Button title="Zerar contador" onPress={() => setCounter(0)} />
      </View>
    </View>
  );
};

export default Config;
