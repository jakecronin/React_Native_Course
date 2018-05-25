import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, onAccept, onDecline, visible }) => {
  const { containerStyle, textStyle, cardSectionStyle } = styles;
  return (
    <Modal
      animationType="slide"
      onRequestClose={() => {}}
      transparent
      visible={visible}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>

        <CardSection style={cardSectionStyle}>
          <Button text={'Yes'} onPress={onAccept} />
          <Button text={'No'} onPress={onDecline} />
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
  },
};

export { Confirm };
