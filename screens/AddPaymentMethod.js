import React from 'react';
import { View, Text, StyleSheet, TextInput, Switch, TouchableOpacity } from 'react-native';
import SuccessButton from '../components/SuccesButton'
import DatePicker from 'react-native-datepicker'

export default function AddPaymentMethod({ navigation }) {
    const [name, ChangeName] = React.useState('');
    const [cardNumber, ChangeCardNumber] = React.useState('');
    const [vencimento, ChangeVencimento] = React.useState('');
    const [cvv, ChangeCVV] = React.useState('');

    function enviarDados() {
        //Realizar validações: nenhum campo vazio
        if (!(name && cardNumber && vencimento && cvv)) {
            alert("Preencha todos os campos!")
            return
        }
        if (vencimento.length < 7) {
            alert("A data deve ser preenchida no formato:\nDD/AAAA")
            return
        }

        paymentDetails = {
            name: name,
            cardNumber: cardNumber,
            cvv: cvv,
            vencimento: vencimento
        }
        userDetails = JSON.stringify(userDetails)
        console.log(paymentDetails)

        //Se API retornar token, prossigo, senão, alerta de erro.
        navigation.navigate('Wallet')
    }

    //Aplica máscara de data a cada entrada do usuário no campo data
    function formatarData(e) {
        var v = e.replace(/\D/g, "");
        v = v.replace(/(\d{2})(\d)/, "$1/$2")
        ChangeVencimento(v);
    }

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Adicione um método de pagamento</Text>
                <Text style={styles.label}>Você será notificado pelo aplicativo do seu banco, assim que nossa plataforma verificar o método de pagamento.</Text>
            </View>

            <TextInput style={styles.input}
                onChangeText={ChangeName}
                value={name}
                placeholder='Nome do titular' />

            <TextInput style={styles.input}
                onChangeText={ChangeCardNumber}
                value={cardNumber}
                keyboardType='numeric'
                maxLength={11}
                placeholder='Número do cartão' />

            <TextInput style={styles.input}
                onChangeText={formatarData}
                value={vencimento}
                keyboardType='numeric'
                maxLength={7}
                placeholder='Data de vencimento(DD/AAAA)' />

            <TextInput style={[styles.input]}
                onChangeText={ChangeCVV}
                value={cvv}
                keyboardType='numeric'
                maxLength={3}
                placeholder='Código de segurança' />

            {/*Faltando realizar validações e bater na api para logar e avançar para*/}
            <SuccessButton label={"Adicionar método de pagamento"} navegarPara={() => enviarDados()} />

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        gap: 10
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
    },
    text: {
        // fontFamily: 'Cochin', //Depois ver se é realmente necessário usar fontes diferentes, pq tem q importar.
        fontSize: 48,
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    label:
    {
        color: '#FFFFFF',
        textAlign:'center',
        fontSize: 14,
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        height: 40,
        width: '90%',
        fontSize: 18,
        borderColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
    },
    switchContainer: {
        width: '90%',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    switchText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
})
