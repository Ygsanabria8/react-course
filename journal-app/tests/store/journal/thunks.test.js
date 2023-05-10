import { addNewEmptyNote, savingNewNote, setActiveNote, startNewNote } from '../../../src/store/journal';

describe('Test on Journal Thuks', () => {

    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('should create a blank note', async() => {

        getState.mockReturnValue({auth: { uid: 'TESTUID'}});

        await startNewNote()(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(savingNewNote());
        expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({
            body: expect.any(String),
            title: expect.any(String),
            id: expect.any(String),
            date: expect.any(Number),
        }));
        expect(dispatch).toHaveBeenCalledWith(setActiveNote({
            body: expect.any(String),
            title: expect.any(String),
            id: expect.any(String),
            date: expect.any(Number),
        }));
    });
});