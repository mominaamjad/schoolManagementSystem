import {View, ScrollView, Text, Image, StyleSheet} from 'react-native'



const Card = ({name,regNo,assigned=false, paid = false ,pic,cardType}) => {
    return(
        <View style = {styles.mainCard}>

            <View>
                <Text style={styles.title}>{name}</Text>
                {cardType == "student" || cardType == "fee" ? <Text style= {styles.reg}>{regNo}</Text> : <></>}
            </View>

            
            <View>

                {/* check if the card type is fee, if yes, then do paid/unpaid. if NO, check if 
                the type is student. If yes, add a picture. 
                if NO, then its "classes", and add assigned/unassigned */}

                {cardType == "fee" ? <Text style={[styles.feeText, {color : paid ? "green" : "red"}]}>{paid ? "Paid" : "Unpaid"}</Text> : cardType == "student" ? <Image source={require('../assets/pfp.jpg') } style = {styles.pfp}></Image> : <Text style={[styles.assignedText, {color : assigned ? "green" : "red"}]}>{assigned ? "Assigned" : "Not Assigned"}</Text>}   
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    mainCard: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        padding: 18,
        marginLeft: 8,
        marginRight: 8,
        marginVertical: 5,
        elevation: 4,
        shadowColor: '#8349EA'
    },

    title:{
        color: "#000000",
        fontSize: 18,
        fontWeight: "600",
        fontFamily: 'Poppins-SemiBold',
    },

    reg:{
        color: "#555555",
        fontSize: 14,
        fontFamily: 'Poppins-Medium'
        
    },

    pfp:{
        width: 75,
        height: 75,
        alignSelf: "flex-end",
        borderRadius: 50,
        marginLeft: 110
    },

    assignedText: {
        alignSelf: "flex-end",
        fontFamily: 'Poppins-Regular',
        paddingLeft: 150,
        paddingTop: 30
    },

    feeText:{
        alignSelf: "flex-end",
        fontFamily: 'Poppins-Regular',
        paddingLeft: 150,
        paddingTop: 30
    }


})

export default Card