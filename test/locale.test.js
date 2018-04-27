import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../src'
let dayjsI = dayjs()

beforeEach(() => {
  MockDate.set(new Date())
  moment.defineLocale('fr', {
	months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
  });
  moment.locale('fr');

  dayjsI.setLocale({
	months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	weeks : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	labels : {
	  MS : 'milliseconde',
	  S : 'seconde',
	  MIN : 'minute',
	  H : 'heure',
	  D : 'jour',
	  W : 'semaine',
	  M : 'mois',
	  Q : 'trimestre',
	  Y : 'an',
	  DATE : 'rendez-vous'
	}
  });
})

afterEach(() => {
  MockDate.reset()
})

it('Format Month MMMM', () => {
  expect(dayjsI.format('MMMM')).toBe(moment().format('MMMM'))
})

it('Format Day of Week d Sun - Sat', () => {
  expect(dayjsI.format('d')).toBe(moment().format('d'))
  expect(dayjsI.format('dddd')).toBe(moment().format('dddd'))
})

it('Set Day', () => {
  expect(dayjsI.set('rendez-vous', 30).valueOf()).toBe(moment().set('date', 30).valueOf())
})

it('Set Month', () => {
  expect(dayjsI.set('mois', 11).valueOf()).toBe(moment().set('month', 11).valueOf())
})

it('Set Year', () => {
  expect(dayjsI.set('an', 2008).valueOf()).toBe(moment().set('year', 2008).valueOf())
})

it('Set Hour', () => {
  expect(dayjsI.set('heure', 6).valueOf()).toBe(moment().set('hour', 6).valueOf())
})

it('Set Minute', () => {
  expect(dayjsI.set('minute', 59).valueOf()).toBe(moment().set('minute', 59).valueOf())
})

it('Set Second', () => {
  expect(dayjsI.set('seconde', 59).valueOf()).toBe(moment().set('second', 59).valueOf())
})

it('Set Millisecond', () => {
  expect(dayjsI.set('milliseconde', 999).valueOf()).toBe(moment().set('millisecond', 999).valueOf())
})

