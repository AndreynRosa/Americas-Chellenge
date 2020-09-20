import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Btn } from '../Button/styles.';


interface Props {
  children: JSX.Element[] | JSX.Element;
  btnName: string;
  title: string;
}
export const CustomDraggableDialog: React.FC<Props> = (props: Props, ...rest) => {
  const [open, setOpen] = React.useState(false);

  const { children,  btnName, title } = props;

  const handleClickOpen = () => {

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Btn {...rest} onClick={handleClickOpen}>
        {btnName}
      </Btn>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent style={{ width: '100%' }}>{children}</DialogContent>
        <DialogActions>
          <Btn
            autoFocus
            onClick={handleClose}

          >
            Fechar
          </Btn>
        </DialogActions>
      </Dialog>
    </div>
  );
};
