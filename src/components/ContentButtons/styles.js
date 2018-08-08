import Global from './../../global/global';

export default {
  container: {
    flex: 2,
    width: Global.width,
  },
  linear: {
    flex: 1,
    flexDirection: 'row',
    width: Global.width,
    justifyContent: 'center'
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderTop: '#ccc',
    borderLeft: '#ccc',
    justifyContent: 'center'
  },
  textBtn: {
    fontWeight: 'bold',
  }
}