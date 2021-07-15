import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class ReadStoryScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            searchedStory: "",
			scannedStoryId: "",
        };
    }
    updateSearchedStory = (searchedStory) => {
        this.setState({searchedStory})
    }
    retrieveStories = () => {
        var allStories = db.collection("stories")
        var query = allStories.where("story", "==", true);
        db.collection("stories").where("story", "==", true)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());
                });
            })
            .catch((error) => {
                console.log("Error getting story: ", error);
            });

    };
    searchFilter = async () => {
		const allStories = await db
		  .collection("dataSource")
		  .where("storyId", "==", this.state.scannedStoryId)
		  .get();
		var transactionType = "";
		if (allStories.docs.length == 0) {
		  transactionType = false;
		} else {
		  allStories.docs.map(doc => {
			var story = doc.data();
			if (story.storyAvailability) {
			  transactionType = "Issue";
			} else {
			  transactionType = "Return";
			}
		});
		}
		return transactionType;
    }
    render() {
        const { searchedStory } = this.state;
        return (
            <View style={styles.inputView}>
                <SearchBar
                    placeholder="Search Stories"
                    onChangeText={this.updateSearchedStory}
                    value={searchedStory}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputView: {
        flexDirection: "row",
        margin: 20
    }
})