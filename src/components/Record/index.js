import React, { useContext } from 'react';
import { DjContext } from '../../store';
import { RecordBtn, RecordContainer } from './styles';

export default function Record() {
  const { downloadStoreState, downloadDispatch } = useContext(DjContext);
  const { url } = downloadStoreState;
  const recordedChunks = [];
  let stream;

  // This generates URL
  const download = () => {
    console.log('download');
    const blob = new Blob(recordedChunks, {
      type: 'video/webm',
    });

    // We create a URL to capture the screen recording blob
    const newURL = URL.createObjectURL(blob);
    downloadDispatch({ type: 'set URL', payload: newURL });

    // After this, we can give users the URL (from store)
    console.log(url);
  };

  // This function runs when mediaRecorder detects data
  const handleDataAvailable = (e) => {
    console.log('started media record');
    if (e.data.size > 0) {
      recordedChunks.push(e.data);
      console.log(recordedChunks);
      download();
    }
  };

  //  RECORD FEATURE
  const recordVid = () => {
    console.log('recording video here');
    // Grab element from canvas created in AudioVisualization component
    // Create canvas after setup from AV has set up
    const canvas = document.querySelector('.recording');
    console.log(canvas);
    stream = canvas.captureStream(25);

    const options = { mimeType: 'video/webm; codecs=vp9' };
    console.log('***********');
    console.log(stream);
    const mediaRecorder = new MediaRecorder(stream, options);
    // When mediaRecorder detects data, it automatically triggers
    mediaRecorder.ondataavailable = handleDataAvailable;

    mediaRecorder.start();

    setTimeout((event) => {
      console.log('stopping');
      mediaRecorder.stop();
      console.log(recordedChunks);
    }, 9000);
    console.log(mediaRecorder);
  };

  return (
    <RecordContainer>
      <RecordBtn onClick={recordVid}>Record</RecordBtn>
    </RecordContainer>
  );
}
