import '../../../components/style.scss'

export default function Write() {
    return (
        <div className='write'>
            <div className="write">
                <form className="writeForm">
                    <label htmlFor="fileInput">
                        <i class="writeAdd fi fi-rr-add"></i>
                    </label>
                    <input type='file' id="fileInput" style={{ display: 'none' }} />
                    <input type="text" placeholder="Tell your story..." className="writeInput" />
                </form>
                <button className='submit'>Publish</button>
            </div>
        </div>
    )
}
