import rx from 'rx';
import request from 'request';

const rxRequest = {
  get(path) {
    return rx.Observable.create(observer => {
      request.get(path, (error, response, body) => {
        if (error) {
          observer.onError(response, error);
        }
        else {
          observer.onNext(response, body);
        }
        observer.onCompleted();
      });
    });
  }
};

export default rxRequest;
