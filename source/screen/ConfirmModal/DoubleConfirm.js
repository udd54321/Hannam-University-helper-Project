import React from 'react';
import {Dialog, Portal, Button, Paragraph, useTheme} from 'react-native-paper';

function DoubleConfirm({doubleopen, handleClose, confirmDelete}) {
  const theme = useTheme();

  return (
    <Portal>
      <Dialog visible={doubleopen} onDismiss={handleClose}>
        <Dialog.Title style={{textAlign: 'center'}}>
          진짜 삭제하시는 건가요?
        </Dialog.Title>
        <Dialog.Content>
          <Paragraph>지우면 다시 복구 할 수 없습니다.</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={confirmDelete}>네</Button>
          <Button onPress={handleClose}>아니요</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

export default DoubleConfirm;
