import React from 'react';
import {Dialog, Portal, Button, Paragraph, useTheme} from 'react-native-paper';
import DoubleConfirm from './DoubleConfirm';

function ConfirmModal({
  open,
  handleClose,
  handleDelete,
  doubleopen,
  confirmDelete,
}) {
  const theme = useTheme();

  return (
    <Portal>
      <Dialog visible={open} onDismiss={handleClose}>
        <Dialog.Title style={{textAlign: 'center'}}>강의 삭제</Dialog.Title>
        <Dialog.Content>
          <Paragraph>이 강의를 삭제하시겠습니까?</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={handleClose}>아니요</Button>
          <Button onPress={handleDelete}>네</Button>
        </Dialog.Actions>
      </Dialog>
      <DoubleConfirm
        doubleopen={doubleopen}
        handleClose={handleClose}
        confirmDelete={confirmDelete}
      />
    </Portal>
  );
}

export default ConfirmModal;
