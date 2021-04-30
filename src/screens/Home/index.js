import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import Reset from '../../assets/icon-repeat.png';
import checker from '../../helpers/checker2';

export class Home extends Component {
    state = {
        firstNumber: null,
        secondNumber: null,
        thirdNumber: null,
        fourthNumber: null,
        resultArray: [],
    };

    check = () => {
        if (
            this.state.firstNumber &&
            this.state.secondNumber &&
            this.state.thirdNumber &&
            this.state.fourthNumber
        ) {
            const resultArray = checker([
                Number(this.state.firstNumber),
                Number(this.state.secondNumber),
                Number(this.state.thirdNumber),
                Number(this.state.fourthNumber),
            ]);
            this.setState({resultArray: resultArray});
        } else {
            {
                showMessage({
                    message: 'Info',
                    description: 'Please fill all the blank spaces',
                    type: 'danger',
                });
            }
        }
    };

    reset = () => {
        this.setState({
            firstNumber: null,
            secondNumber: null,
            thirdNumber: null,
            fourthNumber: null,
        });
    };

    render() {
        return (
            <ScrollView>
                <Text style={styles.title}>24 Solver</Text>
                <Text style={styles.instruction}>
                    This solver only works if all 4 numbers are given !
                </Text>
                <Text style={styles.instruction2}>you can add any number</Text>
                <View style={styles.inputPosition}>
                    <TextInput
                        style={styles.inputBox}
                        keyboardType="number-pad"
                        value={this.state.firstNumber}
                        clearButtonMode="always"
                        onChangeText={firstNumber =>
                            this.setState({firstNumber})
                        }
                    />
                    <TextInput
                        style={styles.inputBox}
                        keyboardType="number-pad"
                        value={this.state.secondNumber}
                        clearButtonMode="always"
                        onChangeText={secondNumber =>
                            this.setState({secondNumber})
                        }
                    />
                    <TextInput
                        style={styles.inputBox}
                        keyboardType="number-pad"
                        value={this.state.thirdNumber}
                        clearButtonMode="always"
                        onChangeText={thirdNumber =>
                            this.setState({thirdNumber})
                        }
                    />
                    <TextInput
                        style={styles.inputBox}
                        keyboardType="number-pad"
                        value={this.state.fourthNumber}
                        clearButtonMode="always"
                        onChangeText={fourthNumber =>
                            this.setState({fourthNumber})
                        }
                    />
                    <TouchableOpacity onPress={this.reset}>
                        <Image source={Reset} style={styles.repeat} />
                    </TouchableOpacity>
                </View>
                <View style={styles.solutionPosition}>
                    <View style={styles.solutionBox}>
                        <Text style={styles.solutionTitle}>Solutions</Text>
                        {/* <Text style={styles.solutionText}>
                            Solusi 1 untuk penyelesaian game adalah 9 - 7 + 2 *
                            11 == 24
                        </Text>
                        <Text style={styles.solutionText}>
                            Solusi 1 untuk penyelesaian game adalah 9 - 7 + 2 *
                            11 == 24
                        </Text> */}
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.state.resultArray}
                            renderItem={({item, index}) => {
                                return (
                                    <Text
                                        style={styles.solutionText}
                                        key={index}>
                                        {`${index + 1}. ${item}`}
                                    </Text>
                                );
                            }}
                            onEndReached={this.next}
                            onEndReachedThreshold={0.1}
                        />
                    </View>
                </View>
                <View style={styles.checkPosition}>
                    <TouchableOpacity onPress={this.check}>
                        <View style={styles.checkBox}>
                            <Text style={styles.checkText}>Check</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        paddingVertical: 30,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        padding: 10,
        backgroundColor: '#ffb142',
        color: '#000000',
    },
    instruction: {
        textAlign: 'center',
        fontSize: 15,
        color: '#000000',
        backgroundColor: '#ffb142',
        paddingBottom: 15,
    },
    instruction2: {
        textAlign: 'center',
        fontSize: 15,
        color: '#000000',
        backgroundColor: '#ffb142',
        paddingBottom: 15,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    inputPosition: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
    },
    inputBox: {
        marginTop: 30,
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: '#d1ccc0',
        textAlign: 'center',
        color: '#000000',
    },
    repeat: {
        marginTop: 30,
        height: 55,
        width: 55,
    },
    solutionPosition: {
        paddingTop: 45,
        padding: 10,
    },
    solutionBox: {
        borderRadius: 30,
        height: 300,
        backgroundColor: '#ffb142',
        paddingVertical: 20,
    },
    solutionTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
    },
    solutionText: {
        textAlign: 'center',
        marginTop: 15,
        color: '#000000',
        fontWeight: 'bold',
    },
    checkPosition: {
        marginVertical: 10,
        paddingHorizontal: 30,
    },
    checkBox: {
        borderRadius: 20,
        fontSize: 25,
        fontWeight: 'bold',
        padding: 10,
        backgroundColor: '#ffb142',
        color: '#000000',
    },
    checkText: {
        textAlign: 'center',
        color: '#000000',
        fontWeight: 'bold',
    },
});

export default Home;
