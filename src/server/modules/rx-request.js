import rx from 'rx';
import request from 'request';

const rxRequest = {
  get(url) {
    return rx.Observable.create(observer => {
      try {
        request.get({url:url, json:true}, (error, response, body) => {
          if (error) {
            observer.onError(error, response);
          }
          else {
            observer.onNext(body, response);
          }

          observer.onCompleted();
        });
      }
      catch (e) {
        observer.onError(e);
        observer.onCompleted();
      }
    });
  }
};

export default rxRequest;
