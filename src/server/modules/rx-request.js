import rx from 'rx';
import request from 'request';

const rxRequest = {
  get(url) {
    return rx.Observable.create(observer => {
      request.get({url:url, json:true}, (error, response, body) => {
        if (error) {
          observer.onError(error, response);
        }
        else {
          observer.onNext(body, response);
        }
        observer.onCompleted();
      });
    });
  }
};

export default rxRequest;
