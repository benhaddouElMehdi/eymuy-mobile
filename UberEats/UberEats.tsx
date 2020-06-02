import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { onScrollEvent, useValue } from "react-native-redash";

import HeaderImage from "./HeaderImage";
import Content from "./Content";
import Header from "./Header";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default (props) => {
  const scrollView = useRef<Animated.ScrollView>(null);
  let menu = []
   for (let i = 0; i < props.catalog.menus.length; i++) {
        menu.push({ name : props.catalog.menus[i].label})
     }

  //get menu fron props
  const [tabs, setTabs] = useState(menu.map(({ name }) => ({ name, anchor: 0 })));
  const y = useValue(0);
  const onScroll = onScrollEvent({ y });
  return (
    <View style={styles.container}>
      <HeaderImage {...{ y }} />
      <Animated.ScrollView
        ref={scrollView}
        style={StyleSheet.absoluteFill}
        scrollEventThrottle={1}
        {...{ onScroll }}
      >
        <Content
          catalog={props.catalog}
          onMeasurement={(index, tab) => {
            tabs[index] = tab;
            setTabs([...tabs]);
          }}
          {...{ y }}
        />
      </Animated.ScrollView>
      <Header {...{ y, tabs, scrollView }} />
    </View>
  );

};
